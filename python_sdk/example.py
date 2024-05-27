# example.py

from python_sdk import EducationDataClient, Directory

# Initialize the client
client = EducationDataClient()

# Create an instance of the Directory endpoint
directory = Directory(client)

# Fetch data from the directory endpoint
try:
    data = directory.get_directory()
    print(data)
except Exception as e:
    print(f"An error occurred: {e}")
