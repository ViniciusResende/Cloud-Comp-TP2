#!/bin/bash

echo "Starting model update";

# Clones GitHub repository to have CSV data
git clone https://github.com/ViniciusResende/Cloud-Comp-TP2.git ./tmp/TP2;

# Copies dataset to the Pod where application expects it to be
cp ./tmp/TP2/data/spotify_dataset.csv ./dataset/spotify_dataset.csv;

# Runs model
python3 app.py;

echo "New association rules available";