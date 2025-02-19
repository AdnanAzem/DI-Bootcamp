import psycopg2
class MenuItem:

    def __init__(self, name, price):
        self.name = name
        self.price = price


        DBNAME = 'menu'
        USER = 'postgres'
        PASSWORD = '2120'
        HOST = "localhost"
        PORT = "5432"

        self.connection = psycopg2.connect(
        dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT
        )

        self.cursor = self.connection.cursor()

    def save(self):
        try:
            query = f'''
            INSERT INTO Menu_Items ( item_name, item_price)
            VALUES
            (%s, %s)
            '''
            self.cursor.execute(query, (self.name, self.price)) # execute the query
            self.connection.commit()
            print(f'Item {self.name} saved successfully.')

        except psycopg2.Error as e:
            print(f"Error saving menu item: {e}")


    def delete(self) :
        try:
            query = "DELETE FROM Menu_Items WHERE item_name = %s "
            self.cursor.execute(query, (self.name,)) # execute the query
            self.connection.commit()
            print(f'Item {self.name} deleted successfully.')
        except psycopg2.Error as e:
            print(f"Error deleting menu item: {e}")      

    def update(self, new_name=None, new_price=None) :
        try:
            if new_name and new_price:
                query = "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s;"
                self.cursor.execute(query, (new_name, new_price, self.name))
            elif new_name:
                query = "UPDATE Menu_Items SET item_name = %s WHERE item_name = %s;"
                self.cursor.execute(query, (new_name, self.name))
            elif new_price:
                query = "UPDATE Menu_Items SET item_price = %s WHERE item_name = %s;"
                self.cursor.execute(query, (new_price, self.name))
            self.connection.commit()
            print(f"Item '{self.name}' updated successfully!")
        except Exception as e:
            print(f"Error updating item: {e}")

    def close(self):
        if self.connection:
            self.cursor.close()
            self.connection.close()


if __name__ == "__main__":
    new_item = MenuItem('Cola', 6) 
    new_item.save()
    new_item.update("Closet", 649)
    new_item.delete()

    item = MenuItem('Burger', 35)
    item.save()
    item.delete()
    item.update('Veggie Burger', 37)

    item.close()