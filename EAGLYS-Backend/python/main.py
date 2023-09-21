#from sqlParseTest import sqlParse
from parseSqlToAst import parseSqlToAst
from modifiedAst import hashColumnNames
from rebuildSqlFromAst import rebuildSqlFromAst


if __name__ == '__main__':
    sqlQuery = "SELECT * FROM test_table WHERE column = 'value';"
    #sqlParse()
    
    # 1st: Parse SQL to AST
    ast = parseSqlToAst(sqlQuery)
    print("1st:", ast)
    
    # 2nd: Hash Column Names
    transformedQuery, columnNameMap = hashColumnNames(sqlQuery)
    print("2nd:")
    print("Transformed SQL Query:")
    print(transformedQuery)
    print("\nColumn Name Mapping:")
    for original, hashed in columnNameMap.items():
        print(f"{original} => {hashed}")

    # 3rd: Rebuild SQL from AST
    rebuiltQuery = rebuildSqlFromAst(sqlQuery)
    print("3rd:", rebuiltQuery)