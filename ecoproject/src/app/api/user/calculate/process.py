# process.py
import sys

def main():
    if len(sys.argv) < 2:
        print("No input received")
        return

    number = int(sys.argv[1])  # input comes as string
    result = number * 2        # just an example operation
    print(result)

if __name__ == "__main__":
    main()
