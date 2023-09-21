import sqlparse
import hashlib

# For 2nd Assignment: For every column name in the AST, replace it with a hashed value.

def hashColumnNames(sqlQuery):
    try:
        parsed = sqlparse.parse(sqlQuery)
        ast = parsed[0] 
        columnNameMap = {}  

        # Recursive function to traverse the AST.
        def traverse(node):
            if hasattr(node, 'tokens'):
                for child in node.tokens:
                    traverse(child)

            # Check if the node is an identifier (column name) with a real name.
            if isinstance(node, sqlparse.sql.Identifier) and node.get_real_name() is not None:
                originalColumnName = str(node)
                # Hash the original column name using MD5.
                hashedColumnName = hashlib.md5(originalColumnName.encode()).hexdigest()
                columnNameMap[originalColumnName] = hashedColumnName
                # Replace the column name in the AST with its hashed value.
                node.value = hashedColumnName

        traverse(ast)

        # Reconstruct the SQL query with hashed column names.
        transformedQuery = str(ast)

        return transformedQuery, columnNameMap
    except Exception as e:
        return str(e), {}

# Example usage:
# sqlQuery = "SELECT column1, column2 FROM my_table WHERE column1 = 'value';"
# transformedQuery, columnNameMap = hashColumnNames(sqlQuery)

# print("2nd:")
# print("Transformed SQL Query:")
# print(transformedQuery)

# print("\nColumn Name Mapping:")
# for original, hashed in columnNameMap.items():
#     print(f"{original} => {hashed}")