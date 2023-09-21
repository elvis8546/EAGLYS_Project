import unittest
import sqlparse
import parseSqlToAst as testparseSqlToAst
import modifiedAst
import rebuildSqlFromAst as testrebuildSqlFromAst

# For 4th Assignment : Write unit tests to validate the correctness of your functions.

class TestSQLParsing(unittest.TestCase):
    
    def testparseSqlToAst(self):
        sqlQuery = "SELECT * FROM my_table WHERE column1 = 'value';"
        ast = testparseSqlToAst.parseSqlToAst(sqlQuery)
        self.assertIsNotNone(ast)
    
    def testhashColumnNames(self):
        sqlQuery = "SELECT column1, column2 FROM my_table WHERE column1 = 'value';"
        columnNameMap, columnNameMap = modifiedAst.hashColumnNames(sqlQuery)
        self.assertIsNotNone(columnNameMap)
        self.assertIsNotNone(columnNameMap)
    
    def testRebuildSqlFromAst(self):
        modifiedSqlQuery = "SELECT hashed_column1, hashed_column2 FROM my_table WHERE hashed_column1 = 'value';"
        parsedAst = sqlparse.parse(modifiedSqlQuery)[0].tokens[0]
        reconstructedSql = testrebuildSqlFromAst.rebuildSqlFromAst(parsedAst)
        self.assertIsNotNone(reconstructedSql)

if __name__ == '__main__':
    unittest.main()