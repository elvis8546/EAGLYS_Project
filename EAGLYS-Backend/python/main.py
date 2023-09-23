# from sqlParseTest import sqlParse
from parseSqlToAst import parseSqlToAst
from modifiedAst import hashColumnNames
from rebuildSqlFromAst import rebuildSqlFromAst

if __name__ == '__main__':
    # Accept SQL Query from User Input
    sqlQuery1 = input("Enter SQL Query for 1st: ")
    sqlQuery2 = input("Enter SQL Query for 2nd: ")
    sqlQuery3 = input("Enter SQL Query for 3rd: ")
    
    # 1st: Parse SQL to AST
    ast = parseSqlToAst(sqlQuery1)
    print("1st:", ast)
    
    # 2nd: Hash Column Names
    transformedQuery, columnNameMap = hashColumnNames(sqlQuery2)
    print("2nd:")
    print("Transformed SQL Query:")
    print(transformedQuery)
    print("\nColumn Name Mapping:")
    for original, hashed in columnNameMap.items():
        print(f"{original} => {hashed}")

    # 3rd: Rebuild SQL from AST
    rebuiltQuery = rebuildSqlFromAst(sqlQuery3)
    print("3rd:", rebuiltQuery)