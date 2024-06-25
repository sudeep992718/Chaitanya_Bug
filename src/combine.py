import os

def combine_files(directory, output_file):
    # Get all file names in the directory
    filenames = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]

    # Open the output file
    with open(output_file, 'w') as outfile:
        for fname in filenames:
            # Construct the full file path
            file_path = os.path.join(directory, fname)
            # Ensure that the file is not the output file itself
            if file_path == output_file:
                continue
            # Open and read each file
            with open(file_path, 'r') as readfile:
                # Write the content to the output file
                outfile.write(readfile.read() + '\n')  # Append a newline after each file's content

# Usage example
directory = '.'  # Replace this with your directory path
output_file = 'combined_files.txt'    # The name of the combined output file
combine_files(directory, output_file)
