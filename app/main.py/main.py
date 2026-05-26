import time

def analyze_market(candles):

    closes = [c["close"] for c in candles]

    ema_fast = sum(closes[-5:]) / 5
    ema_slow = sum(closes[-15:]) / 15

    call_score = 0
    put_score = 0

    if ema_fast > ema_slow:
        call_score += 2

    elif ema_fast < ema_slow:
        put_score += 2

    if closes[-1] > closes[-2]:
        call_score += 1

    elif closes[-1] < closes[-2]:
        put_score += 1

    if call_score > put_score:
        return "CALL"

    elif put_score > call_score:
        return "PUT"

    return "WAIT"


candles = [
    {"close": 1},
    {"close": 2},
    {"close": 3},
    {"close": 4},
    {"close": 5},
    {"close": 6},
    {"close": 7},
    {"close": 8},
    {"close": 9},
    {"close": 10},
    {"close": 11},
    {"close": 12},
    {"close": 13},
    {"close": 14},
    {"close": 15},
]

while True:

    signal = analyze_market(candles)

    print("SIGNAL:", signal)

    time.sleep(5)