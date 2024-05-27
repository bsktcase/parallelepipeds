# python_sdk/__init__.py

from .client import EducationDataClient
from .endpoints.ipeds.directory import Directory

__all__ = ['EducationDataClient', 'Directory']
