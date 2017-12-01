"""Gets input from a source"""
import time
from datetime import datetime, timedelta


def get_input():
    """Returns the relevant input"""
    pass


def loop_for_input(duration, recording_interval):
    """Records the input for time duration at the interval specified"""
    start_time = datetime.now()
    time.sleep(0.5)
    diff = start_time + timedelta(seconds=recording_interval)
    print(diff)
    print(diff > datetime.now())


loop_for_input(3, 0.7)
