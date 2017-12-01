"""
Runs the touch tracking
"""
import json
import csv


def write_data(user_name):
    """Saves the user data to a csv"""
    # Read file in
    file = open(user_name + '.json')
    data = json.load(file)
    file.close()
    # Write the csv out
    file = csv.writer(open('output_' + user_name + '.csv', 'w', newline=''))
    # Print the user name
    for item in data:
        # Create the top line of csv - username plus times
        top_line = []
        top_line.append(item['name'])
        for row in item['data']:
            top_line.append(row['time'])
        # Write out the top line
        file.writerow(top_line)
        # Create the bottom line of csv - time values
        bottom_line = []
        bottom_line.append('')
        for row in item['data']:
            bottom_line.append(row['value'])
        # Write out the bottom lime
        file.writerow(bottom_line)

def testing():
    """For testing the write data function"""
    write_data('joshua')
