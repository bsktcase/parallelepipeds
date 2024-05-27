# python_sdk/endpoints/ipeds/directory.py

from python_sdk.client import EducationDataClient

class Directory:
    def __init__(self, client: EducationDataClient):
        self.client = client

    def get_directory(self, **params):
        endpoint = "ipeds/2022/"
        return self.client._make_request(endpoint, params)
