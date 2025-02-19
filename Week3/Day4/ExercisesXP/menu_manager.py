import psycopg2

class MenuManager:

    DBNAME = 'menu'
    USER = 'postgres'
    PASSWORD = '2120'
    HOST = "localhost"
    PORT = "5432"

    connection = psycopg2.connect(
    dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT
    )

    cursor = connection.cursor()

    @classmethod
    def get_by_name(cls, name):
        try:
            query = "SELECT * FROM Menu_Items WHERE item_name = %s;"
            MenuManager.cursor.execute(query, (name,))
            item = MenuManager.cursor.fetchone()
            if item:
                return item
            else:
                return None
        except Exception as e:
            print(f"Error fetching item by name: {e}")


    @classmethod
    def all_items(cls):
        """Returns a list of all items from the Menu_Items table."""
        try:
            query = "SELECT * FROM Menu_Items;"
            MenuManager.cursor.execute(query)
            items = MenuManager.cursor.fetchall()
            return items
        except Exception as e:
            print(f"Error fetching all items: {e}")




if __name__ == "__main__":
    item2 = MenuManager.get_by_name('Beef Stew')
    items = MenuManager.all_items()
    print(item2)
    print(items)