import fs from "fs";

const args = process.argv.slice(2); // Skip the first two arguments (node path and script path)

if (args.length < 2) {
  console.error("Usage: ./your_program.sh tokenize <filename>");
  process.exit(1);
}

const command = args[0];

if (command !== "tokenize") {
  console.error(`Usage: Unknown command: ${command}`);
  process.exit(1);
}

const filename = args[1];

const fileContent = fs.readFileSync(filename, "utf8");

if (fileContent.length !== 0) {
  throw new Error("Scanner not implemented");
} else {
  let current = 0;
  let line = 1;
  let tokens = [];
  while (current < fileContent.length) {
    let char = fileContent[current];
    if (char === "\n") {
      line++;
      current++;
    } else if (char === " ") {
      current++;
    } else {
      const scanner = new Scanner(fileContent);


    }
  }
}

enum TokenType {
  // Single-character tokens.
  LEFT_PAREN, RIGHT_PAREN, LEFT_BRACE, RIGHT_BRACE,
  COMMA, DOT, MINUS, PLUS, SEMICOLON, SLASH, STAR,

  // Literals.
  IDENTIFIER, STRING, NUMBER,

  // Keywords.
  AND, CLASS, ELSE, FALSE, FUN, FOR, IF, NIL, OR,
  PRINT, RETURN, SUPER, THIS, TRUE, VAR, WHILE,

  EOF
}

class Scanner {
  #current = 0;
  #source = "";
  tokens = [];

  constructor(source) {
    this.#source = source;
  }

  #advance() {
    return source.charAt(current++);
  }

  #addToken(type) {
    this.addToken(type, null);
  }

  addToken(type, literal) {
    const text = source.substring(start, current);
    tokens.add(new Token(type, text, literal, line));
  }

  #isAtEnd() {
    return current >= source.length;
  }

  scanToken() {
    const token = this.#advance();
    switch (token){
      case '(': addToken(TokenType.LEFT_PAREN); break;
      case ')': addToken(TokenType.RIGHT_PAREN); break;
      case '{': addToken(TokenType.LEFT_BRACE); break;
      case '}': addToken(TokenType.RIGHT_BRACE); break;
      case ',': addToken(TokenType.COMMA); break;
      case '.': addToken(TokenType.DOT); break;
      case '-': addToken(TokenType.MINUS); break;
      case '+': addToken(TokenType.PLUS); break;
      case ';': addToken(TokenType.SEMICOLON); break;
      case '*': addToken(TokenType.STAR); break; 
    }
  }

  scanTokens() {
    while (!this.#isAtEnd()) {
      // We are at the beginning of the next lexeme.
      start = current;
      scanToken();
    }

    tokens.add(new Token(EOF, "", null, line));
    return tokens;
  }
}


class Token {
  constructor(type, lexeme, literal, line) {
    this.type = type;
    this.lexeme = lexeme;
    this.literal = literal;
    this.line = line;
  }

  toString() {
    return `${type} ${lexeme} ${literal}`;
  }
}