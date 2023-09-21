import sqlparse

#From sqlparse github


def sqlParse():
    # Split a string containing two SQL statements:
    raw = 'select * from foo; select * from bar;'
    statements = sqlparse.split(raw)


    # Format the first statement and print it out:
    first = statements[1]
    print(sqlparse.format(first, reindent=True, keyword_case='upper'))

    # Parsing a SQL statement:
    parsed = sqlparse.parse('select * from foo')[0]
    print(parsed.tokens)
