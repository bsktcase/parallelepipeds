# python_sdk/client.py

import pip._vendor.requests as requests

class EducationDataClient:
    BASE_URL = "https://educationdata.urban.org/api/v1/college-university/"

    def __init__(self, api_key=None):
        self.api_key = api_key

    def _make_request(self, endpoint, params=None):
        url = f"{self.BASE_URL}{endpoint}"
        headers = {'Authorization': f'Bearer {self.api_key}'} if self.api_key else {}
        response = requests.get(url, headers=headers, params=params)
        
        if response.status_code != 200:
            response.raise_for_status()
        
        return response.json()
