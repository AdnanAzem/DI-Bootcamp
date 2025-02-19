from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    """
    Displays the program menu and handles user input.
    """
    while True:
        print("\n--- Program Menu ---")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Menu")
        print("E - Exit")

        choice = input("Enter your choice: ").strip().upper()

        if choice == "V":
            view_item()
        elif choice == "A":
            add_item_to_menu()
        elif choice == "D":
            remove_item_from_menu()
        elif choice == "U":
            update_item_from_menu()
        elif choice == "S":
            show_restaurant_menu()
        elif choice == "E":
            print("\nExiting the program...")
            show_restaurant_menu()
            break
        else:
            print("Invalid choice. Please try again.")

def add_item_to_menu():
    """
    Adds a new item to the restaurant's menu.
    """
    try:
        name = input("Enter the item's name: ").strip()
        price = int(input("Enter the item's price: ").strip())

        # Create a MenuItem object and save it to the database
        item = MenuItem(name, price)
        item.save()
        print(f"Item '{name}' was added successfully!")
    except ValueError:
        print("Invalid price. Please enter a valid number.")
    except Exception as e:
        print(f"Error adding item: {e}")

def remove_item_from_menu():
    """
    Removes an item from the restaurant's menu.
    """
    try:
        name = input("Enter the name of the item to remove: ").strip()

        # Create a MenuItem object and delete it from the database
        item = MenuItem(name, 0)  # Price is irrelevant for deletion
        item.delete()
        print(f"Item '{name}' was deleted successfully!")
    except Exception as e:
        print(f"Error deleting item: {e}")

def update_item_from_menu():
    """
    Updates an item in the restaurant's menu.
    """
    try:
        old_name = input("Enter the name of the item to update: ").strip()
        new_name = input("Enter the new name (leave blank to keep the same): ").strip()
        new_price = input("Enter the new price (leave blank to keep the same): ").strip()

        # Convert new_price to integer if provided
        new_price = int(new_price) if new_price else None

        # Create a MenuItem object and update it in the database
        item = MenuItem(old_name, 0)  # Price is irrelevant for update
        item.update(new_name=new_name if new_name else None, new_price=new_price)
        print(f"Item '{old_name}' was updated successfully!")
    except ValueError:
        print("Invalid price. Please enter a valid number.")
    except Exception as e:
        print(f"Error updating item: {e}")

def view_item():
    """
    Displays details of a specific item by name.
    """
    try:
        name = input("Enter the name of the item to view: ").strip()

        # Fetch the item by name using MenuManager
        item = MenuManager.get_by_name(name)
        if item:
            print(f"Item found: ID={item[0]}, Name='{item[1]}', Price={item[2]}")
        else:
            print(f"No item found with the name '{name}'.")
    except Exception as e:
        print(f"Error viewing item: {e}")

def show_restaurant_menu():
    """
    Displays the entire restaurant menu.
    """
    try:
        print("\n--- Restaurant Menu ---")
        items = MenuManager.all_items()
        if items:
            for item in items:
                print(f"ID: {item[0]}, Name: {item[1]}, Price: {item[2]}")
        else:
            print("The menu is empty.")
    except Exception as e:
        print(f"Error displaying menu: {e}")

# Run the program
if __name__ == "__main__":
    show_user_menu()