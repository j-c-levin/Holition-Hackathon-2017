"""Runs the program"""
import csv_writer
import user_input

DURATION_OF_TASK = 30
INTERVAL_FOR_INPUT = 0.1

def main(): 
    """Runs the main loop of the code"""
    # Get user's name
    user_name = input('What is their name? ')
    # Wait for the command to run the first recording
    user_input.loop_for_input(DURATION_OF_TASK, INTERVAL_FOR_INPUT)
    # Wait for the command to run the second recording
    # Wait for the command to run the third recording
    # Write out the csv
    csv_writer.write_data(user_name)
    # Should main re-run?
    should_re_run = input('Is there another user? ')
    if should_re_run == 'y' or should_re_run == 'yes':
        main()

main()
