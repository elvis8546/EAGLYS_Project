import sqlparse
    
# For 1st Assignment : Using your language of choice (Any language), write a function that takes a SQL query string as input
# and returns its AST representation.

def parseSqlToAst(sqlQuery):
    try:
        parsed = sqlparse.parse(sqlQuery)
        # The parsed variable now contains a list of parsed statements,
        ast = parsed[0].tokens
        return ast
    except Exception as e:
        return str(e)

# Example usage:
# sqlQuery = "SELECT * FROM my_table WHERE column = 'value';"
# ast = parseSqlToAst(sqlQuery)
# print("1st:")
# print(ast)