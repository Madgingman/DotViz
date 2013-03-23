/* parser generated by jison 0.4.2 */
var dot = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"graph":3,"hdr":4,"body":5,"EOF":6,"OPEN_BRACE":7,"optstmtlist":8,"CLOSE_BRACE":9,"graphtype":10,"optgraphname":11,"atom":12,"T_graph":13,"T_digraph":14,"stmtlist":15,"stmt":16,"optsemi":17,"TZ":18,"attrstmt":19,"compound":20,"simple":21,"rcompound":22,"optattr":23,"nodelist":24,"EDGE_OP":25,"node":26,",":27,":":28,"attrtype":29,"optmacroname":30,"attrlist":31,"graphattrdefs":32,"GTYPE":33,"T_node":34,"T_edge":35,"=":36,"[":37,"optattrdefs":38,"]":39,"attrdefs":40,"attritem":41,"optseparator":42,"attrassignment":43,"attrmacro":44,"@":45,"T_atom":46,"qatom":47,"T_qatom":48,"+":49,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",7:"OPEN_BRACE",9:"CLOSE_BRACE",13:"T_graph",14:"T_digraph",18:"TZ",25:"EDGE_OP",27:",",28:":",33:"GTYPE",34:"T_node",35:"T_edge",36:"=",37:"[",39:"]",45:"@",46:"T_atom",48:"T_qatom",49:"+"},
productions_: [0,[3,3],[3,1],[3,0],[5,3],[4,2],[11,1],[11,0],[10,1],[10,1],[8,1],[8,0],[15,2],[15,1],[17,1],[17,0],[16,2],[16,2],[20,3],[21,1],[22,3],[22,0],[24,1],[24,3],[26,1],[26,3],[26,5],[19,3],[19,1],[29,1],[29,1],[29,1],[30,2],[30,0],[23,1],[23,0],[31,4],[38,2],[38,0],[40,2],[41,1],[41,1],[43,3],[44,2],[32,1],[42,1],[42,1],[42,0],[12,1],[12,1],[47,1],[47,3]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:/*endgraph();*/
break;
case 5:/*startgraph($$[$01],$$[$0],$$[$0-1]);*/
break;
case 6:this.$=$$[$0];
break;
case 7:this.$=0;
break;
case 8:this.$ = 0;
break;
case 9:this.$ = 1;
break;
case 18:/*if ($$[$0-1]) endedge(); else endnode();*/
break;
case 20:/*bufferedges();this.$ = 1;*/
break;
case 21:this.$ = 0;
break;
case 24:/*appendnode($$[$0],NIL(char*),NIL(char*));*/
break;
case 25:/*appendnode($$[$0-2],$$[$0],NIL(char*));*/
break;
case 26:/*appendnode($$[$0-4],$$[$0-2],$$[$0]);*/
break;
case 27:/*attrstmt($$[$0-2],$$[$0-1]);*/
break;
case 28:/*attrstmt(T_graph,NIL(char*));*/
break;
case 29:this.$ = GTYPE;/*T_graph*/
break;
case 30:this.$ = T_node;
break;
case 31:this.$ = T_edge;
break;
case 32:this.$ = $$[$0-1];
break;
case 42:appendattr($$[$0-2],$$[$0]);
break;
case 43:/*appendattr($$[$0],NIL(char*));*/
break;
case 48:this.$ = $$[$0];
break;
case 49:this.$ = $$[$0];
break;
case 50:this.$ = $$[$0];
break;
case 51:this.$ = concat($$[$0-2],$$[$0]);
break;
}
},
table: [{1:[2,3],2:[1,3],3:1,4:2,10:4,13:[1,5],14:[1,6]},{1:[3]},{5:7,7:[1,8]},{1:[2,2]},{7:[2,7],11:9,12:10,46:[1,11],47:12,48:[1,13]},{7:[2,8],46:[2,8],48:[2,8]},{7:[2,9],46:[2,9],48:[2,9]},{6:[1,14]},{8:15,9:[2,11],12:28,15:16,16:17,19:18,20:19,21:22,24:27,26:29,29:20,32:21,33:[1,23],34:[1,24],35:[1,25],43:26,46:[1,11],47:12,48:[1,13]},{7:[2,5]},{7:[2,6]},{7:[2,48],9:[2,48],18:[2,48],25:[2,48],27:[2,48],28:[2,48],33:[2,48],34:[2,48],35:[2,48],36:[2,48],37:[2,48],39:[2,48],45:[2,48],46:[2,48],48:[2,48]},{7:[2,49],9:[2,49],18:[2,49],25:[2,49],27:[2,49],28:[2,49],33:[2,49],34:[2,49],35:[2,49],36:[2,49],37:[2,49],39:[2,49],45:[2,49],46:[2,49],48:[2,49],49:[1,30]},{7:[2,50],9:[2,50],18:[2,50],25:[2,50],27:[2,50],28:[2,50],33:[2,50],34:[2,50],35:[2,50],36:[2,50],37:[2,50],39:[2,50],45:[2,50],46:[2,50],48:[2,50],49:[2,50]},{1:[2,1]},{9:[1,31]},{9:[2,10],12:28,16:32,19:18,20:19,21:22,24:27,26:29,29:20,32:21,33:[1,23],34:[1,24],35:[1,25],43:26,46:[1,11],47:12,48:[1,13]},{9:[2,13],33:[2,13],34:[2,13],35:[2,13],46:[2,13],48:[2,13]},{9:[2,15],17:33,18:[1,34],33:[2,15],34:[2,15],35:[2,15],46:[2,15],48:[2,15]},{9:[2,15],17:35,18:[1,34],33:[2,15],34:[2,15],35:[2,15],46:[2,15],48:[2,15]},{12:37,30:36,37:[2,33],46:[1,11],47:12,48:[1,13]},{9:[2,28],18:[2,28],33:[2,28],34:[2,28],35:[2,28],46:[2,28],48:[2,28]},{9:[2,21],18:[2,21],22:38,25:[1,39],33:[2,21],34:[2,21],35:[2,21],37:[2,21],46:[2,21],48:[2,21]},{37:[2,29],46:[2,29],48:[2,29]},{37:[2,30],46:[2,30],48:[2,30]},{37:[2,31],46:[2,31],48:[2,31]},{9:[2,44],18:[2,44],33:[2,44],34:[2,44],35:[2,44],46:[2,44],48:[2,44]},{9:[2,19],18:[2,19],25:[2,19],27:[1,40],33:[2,19],34:[2,19],35:[2,19],37:[2,19],46:[2,19],48:[2,19]},{9:[2,24],18:[2,24],25:[2,24],27:[2,24],28:[1,42],33:[2,24],34:[2,24],35:[2,24],36:[1,41],37:[2,24],46:[2,24],48:[2,24]},{9:[2,22],18:[2,22],25:[2,22],27:[2,22],33:[2,22],34:[2,22],35:[2,22],37:[2,22],46:[2,22],48:[2,22]},{48:[1,43]},{6:[2,4]},{9:[2,12],33:[2,12],34:[2,12],35:[2,12],46:[2,12],48:[2,12]},{9:[2,16],33:[2,16],34:[2,16],35:[2,16],46:[2,16],48:[2,16]},{9:[2,14],33:[2,14],34:[2,14],35:[2,14],46:[2,14],48:[2,14]},{9:[2,17],33:[2,17],34:[2,17],35:[2,17],46:[2,17],48:[2,17]},{23:45,31:44,37:[2,35]},{36:[1,46]},{9:[2,35],18:[2,35],23:47,31:48,33:[2,35],34:[2,35],35:[2,35],37:[2,35],46:[2,35],48:[2,35]},{12:50,21:49,24:27,26:29,46:[1,11],47:12,48:[1,13]},{12:50,26:51,46:[1,11],47:12,48:[1,13]},{12:52,46:[1,11],47:12,48:[1,13]},{12:53,46:[1,11],47:12,48:[1,13]},{7:[2,51],9:[2,51],18:[2,51],25:[2,51],27:[2,51],28:[2,51],33:[2,51],34:[2,51],35:[2,51],36:[2,51],37:[2,51],39:[2,51],45:[2,51],46:[2,51],48:[2,51],49:[2,51]},{9:[2,27],18:[2,27],33:[2,27],34:[2,27],35:[2,27],37:[2,34],46:[2,27],48:[2,27]},{37:[1,54]},{37:[2,32]},{9:[2,18],18:[2,18],33:[2,18],34:[2,18],35:[2,18],37:[1,54],46:[2,18],48:[2,18]},{9:[2,34],18:[2,34],33:[2,34],34:[2,34],35:[2,34],37:[2,34],46:[2,34],48:[2,34]},{9:[2,21],18:[2,21],22:55,25:[1,39],33:[2,21],34:[2,21],35:[2,21],37:[2,21],46:[2,21],48:[2,21]},{9:[2,24],18:[2,24],25:[2,24],27:[2,24],28:[1,42],33:[2,24],34:[2,24],35:[2,24],37:[2,24],46:[2,24],48:[2,24]},{9:[2,23],18:[2,23],25:[2,23],27:[2,23],33:[2,23],34:[2,23],35:[2,23],37:[2,23],46:[2,23],48:[2,23]},{9:[2,42],18:[2,42],27:[2,42],33:[2,42],34:[2,42],35:[2,42],39:[2,42],45:[2,42],46:[2,42],48:[2,42]},{9:[2,25],18:[2,25],25:[2,25],27:[2,25],28:[1,56],33:[2,25],34:[2,25],35:[2,25],37:[2,25],46:[2,25],48:[2,25]},{38:57,39:[2,38],45:[2,38],46:[2,38],48:[2,38]},{9:[2,20],18:[2,20],33:[2,20],34:[2,20],35:[2,20],37:[2,20],46:[2,20],48:[2,20]},{12:58,46:[1,11],47:12,48:[1,13]},{12:64,39:[1,59],40:60,41:61,43:62,44:63,45:[1,65],46:[1,11],47:12,48:[1,13]},{9:[2,26],18:[2,26],25:[2,26],27:[2,26],33:[2,26],34:[2,26],35:[2,26],37:[2,26],46:[2,26],48:[2,26]},{9:[2,36],18:[2,36],33:[2,36],34:[2,36],35:[2,36],37:[2,36],46:[2,36],48:[2,36]},{39:[2,37],45:[2,37],46:[2,37],48:[2,37]},{18:[1,67],27:[1,68],39:[2,47],42:66,45:[2,47],46:[2,47],48:[2,47]},{18:[2,40],27:[2,40],39:[2,40],45:[2,40],46:[2,40],48:[2,40]},{18:[2,41],27:[2,41],39:[2,41],45:[2,41],46:[2,41],48:[2,41]},{36:[1,41]},{12:69,46:[1,11],47:12,48:[1,13]},{39:[2,39],45:[2,39],46:[2,39],48:[2,39]},{39:[2,45],45:[2,45],46:[2,45],48:[2,45]},{39:[2,46],45:[2,46],46:[2,46],48:[2,46]},{18:[2,43],27:[2,43],39:[2,43],45:[2,43],46:[2,43],48:[2,43]}],
defaultActions: {3:[2,2],9:[2,5],10:[2,6],14:[2,1],31:[2,4],46:[2,32]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    var ranges = this.lexer.options && this.lexer.options.ranges;

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            var errStr = '';
            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state === 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol == 2 ? null : symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};


/* generated by jison-lex 0.1.0 */
var lexer = (function(){
var lexer = {
EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:console.log('SPACE:');/* skip  space */
break;
case 1:console.log('GTYPE:'+yy_.yytext); return 13;
break;
case 2:console.log('GTYPE:'+yy_.yytext); return 14;
break;
case 3:console.log('EDGE_OP:'+yy_.yytext); return 25;
break;
case 4:console.log('EGDE_OP:'+yy_.yytext); return 25;
break;
case 5:console.log('OPEN_BRACE:'+yy_.yytext); return 7;
break;
case 6:console.log('CLOSE_BRACE:'+yy_.yytext); return 9;
break;
case 7:console.log('TZ:'+yy_.yytext); return 18;
break;
case 8:console.log('NAME:'+yy_.yytext); return 46;
break;
case 9:return 6;
break;
}
},
rules: [/^(?:\s+)/,/^(?:graph\b)/,/^(?:digraph\b)/,/^(?:->)/,/^(?:--)/,/^(?:\{)/,/^(?:\})/,/^(?:;)/,/^(?:([a-zA-Z_])(([a-zA-Z_])|([0-9]))*)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = dot;
exports.Parser = dot.Parser;
exports.parse = function () { return dot.parse.apply(dot, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}
function dparse(a) {
    dot.parse(a);
}