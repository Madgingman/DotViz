%lex

D	[0-9]
L	[a-zA-Z_]
H	[a-fA-F0-9]
%%
\s+         		{console.log('SPACE:');/* skip  space */}
"graph"			{console.log('GTYPE:'+yytext); return 'T_graph';}
"digraph"		{console.log('GTYPE:'+yytext); return 'T_digraph';}
"->"			{console.log('EDGE_OP:'+yytext); return 'EDGE_OP';}
"--"			{console.log('EGDE_OP:'+yytext); return 'EDGE_OP';}
'{'			{console.log('OPEN_BRACE:'+yytext); return 'OPEN_BRACE';}
'}'			{console.log('CLOSE_BRACE:'+yytext); return 'CLOSE_BRACE';}
';'			{console.log('TZ:'+yytext); return 'TZ';} 
{L}({L}|{D})* 		{console.log('NAME:'+yytext); return 'T_atom';} 

<<EOF>> 		return 'EOF';
/lex

%token  T_atom  T_graph T_digraph EGDE_OP OPEN_BRACE CLOSE_BRACE TZ
%start graph


%% /* language grammar */


graph		:  hdr body EOF{/*endgraph();*/} 
			|  error	//{if (G) {agclose(G); G = Ag_G_global = NIL(Agraph_t*);}}
			|  /* empty */
			;

body		: OPEN_BRACE optstmtlist CLOSE_BRACE;

hdr			:	/*optstrict*/ graphtype optgraphname {/*startgraph($3,$2,$1);*/}
			;

optgraphname:	atom {$$=$1;} | /* empty */ {$$=0;} ;

//optstrict	:  T_strict  {$$=1;} |  /* empty */ {$$=0;} ;

graphtype	:	T_graph {$$ = 0;} |	T_digraph {$$ = 1;} ;

optstmtlist	:	stmtlist |	/* empty */ ;

stmtlist 	:	stmtlist stmt |	stmt ;

optsemi		: TZ | ;

stmt		:  attrstmt  optsemi
			|  compound	 optsemi
			;

compound 	:	simple rcompound optattr
					{/*if ($2) endedge(); else endnode();*/}
		;

simple		:	nodelist ; //| subgraph ;

rcompound	:	EDGE_OP  simple rcompound {/*bufferedges();$$ = 1;*/}
			|	/* empty */ {$$ = 0;}
			;


nodelist	: node | nodelist ',' node ;

node		: atom {/*appendnode($1,NIL(char*),NIL(char*));*/}
            | atom ':' atom {/*appendnode($1,$3,NIL(char*));*/}
            | atom ':' atom ':' atom {/*appendnode($1,$3,$5);*/}
            ;

attrstmt	:  attrtype optmacroname attrlist {/*attrstmt($1,$2);*/}
			|  graphattrdefs {/*attrstmt(T_graph,NIL(char*));*/}
			;

attrtype :	GTYPE  {$$ = GTYPE;/*T_graph*/}
			| T_node {$$ = T_node;}
			| T_edge {$$ = T_edge;}
			;

optmacroname : atom '=' {$$ = $1;}
			| /* empty {$$ = NIL(char*); }*/ 
			;

optattr		:	attrlist |  /* empty */ ;

attrlist	: optattr '[' optattrdefs ']' ;

optattrdefs	: optattrdefs attrdefs 
			| /* empty */ ;

attrdefs	:  attritem optseparator
			;

attritem	: attrassignment | attrmacro ; 

attrassignment	:  atom '=' atom {appendattr($1,$3);}
			;

attrmacro	:	'@' atom {/*appendattr($2,NIL(char*));*/}	/* not yet impl */
			;

graphattrdefs : attrassignment
			;
/*
subgraph	:  optsubghdr {opensubg($1);} body {closesubg();}
			;

optsubghdr	: T_subgraph atom {$$=$2;}
			| T_subgraph  {$$=NIL(char*);}
			|  {$$=NIL(char*);}//
			;
*/
optseparator :  TZ | ',' | /*empty*/ ;

atom	:  T_atom {$$ = $1;}
			|  qatom {$$ = $1;}
			;

qatom	:  T_qatom {$$ = $1;}
			|  qatom '+' T_qatom {$$ = concat($1,$3);}
			;



%%
