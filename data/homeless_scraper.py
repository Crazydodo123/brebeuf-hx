#!/bin/python
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import json
import time
import requests


def get_html(file):
    b = str()
    with open(file, "r") as f:
        b = f.read()
    return b
        
#url = "https://www.211qc.ca/en/search?cat-id=11&sub-cat=day-and-evening-centres"
#
#driver = webdriver.Firefox()
#
#driver.get(url)
#
#WebDriverWait(driver, 60).until(expected_conditions.presence_of_element_located((By.CLASS_NAME, "recherche-content-list-item")))
#
#
#write_html(driver.page_source)
#
#driver.close()


API_KEY = "AIzaSyCBzmiH3cMYxNYDfU99x7tPjZv01-ALqzk"

def geo_loc(ADDRESS):
    url = f"https://maps.googleapis.com/maps/api/geocode/json?address={ADDRESS}&key={API_KEY}"
    json_geo = requests.get(url).text
    json_geo = json.loads(json_geo)
    if json_geo["status"] == "OK":
        location = json_geo["results"][0]["geometry"]["location"]
        return location
    else:
        return "NONE"

soup = BeautifulSoup(get_html("day.html"), 'html.parser')


prefix = "recherche-content-list-item"
contents = soup.find_all(class_=prefix)

def check_none(found_content):
    if found_content == None:
        return None
    else:
        data = found_content.text.strip()
        if data == "void" or data == "":
            return None
        else:
            return data

subcat_queries = ["phone", "website", "email"]

url = "http://localhost:3003/api/places"
for content in contents:
    title = content.find(class_=prefix + '-title')
    title_data = check_none(title)
    if title_data == None:
        title_data = "none"

    geo = content.find(class_=prefix + '-geoinfo').find(class_="organisme-address")
    addr_data = check_none(geo)
    loc = geo_loc(addr_data)
    if loc != "NONE":
        lat = loc['lat']
        lng = loc['lng']
    else:
        lat = 0
        lng = 0

    desc = content.find(class_=prefix + '-description p')
    desc_data = check_none(desc)

    subcat_search = 'flexbox flex-flow-row-wrap ' + prefix + '-link-list'
    link_list = content.find(class_=subcat_search)

    meta_data = []
    for query in subcat_queries:
        search_query = "organization-item-link flexbox-inline flex-flow-row-no-wrap flex-center " + query + " " + prefix + "-link"
        meta = link_list.find(class_=search_query)
        meta_data.append(check_none(meta))

    myobj = {"name": title_data.capitalize(), "type": "centers", "phoneNumber": meta_data[0], "email": meta_data[2], "website": meta_data[1], "address": addr_data, "description": desc_data ,"lat":lat, "lon":lng,"time": time.time() }
    if myobj["name"] != "None":
        response = requests.post(url, json = myobj)
        print(response.text)
        
    else:
        print("NOTINSIDE:", myobj)
        

    print("------")




