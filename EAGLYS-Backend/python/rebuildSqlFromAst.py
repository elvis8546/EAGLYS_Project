import sqlparse

# For 3rd Assignment : Using your language of choice (Any language), write a function that takes a SQL query string as input
# and returns its AST representation.

def rebuildSqlFromAst(ast):
    try:
        # Convert the modified AST back to a SQL string
        sql_query = str(ast)
        return sql_query
    except Exception as e:
        return str(e)

# Example usage:
# modifiedSqlQuery = "SELECT hashed_column1, hashed_column2 FROM my_table WHERE hashed_column1 = 'value';"
# parsedAst = sqlparse.parse(modifiedSqlQuery)[0]  # Assuming a single SQL statement

# print("3rd:")
# reconstructed_sql = rebuildSqlFromAst(parsedAst)
# print(reconstructed_sql)