import os
import json
import pandas as pd
from mlxtend.frequent_patterns import fpgrowth, association_rules
from mlxtend.preprocessing import TransactionEncoder

# Step 1: Load and Group Data
csv_path = '/app/dataset/spotify_dataset.csv'
data = pd.read_csv(csv_path)

# Group data by `pid` to form playlists
playlists = data.groupby('pid')['track_name'].apply(list)

# Convert playlists into a binary matrix format for FP-Growth
te = TransactionEncoder()
te_ary = te.fit(playlists).transform(playlists)
binary_matrix = pd.DataFrame(te_ary, columns=te.columns_)

# Step 2: Apply FP-Growth
frequent_itemsets = fpgrowth(binary_matrix, min_support=0.12, use_colnames=True)
rules = association_rules(
  frequent_itemsets, 
  metric="confidence", 
  min_threshold=0.8, 
  num_itemsets=len(frequent_itemsets)
)

# Filter by lift
rules = rules[rules['lift'] > 1.2]

# Define the output directory
output_dir = "/app/output"
os.makedirs(output_dir, exist_ok=True)

# Convert 'antecedents' and 'consequents' columns to lists for JSON serialization
rules['antecedents'] = rules['antecedents'].apply(list)
rules['consequents'] = rules['consequents'].apply(list)

# Extract only the antecedents and consequents
rules_to_save = rules[['antecedents', 'consequents']].to_dict(orient="records")

# Save Association Rules to JSON
rules_file = os.path.join(output_dir, "association_rules.json")

with open(rules_file, "w") as f:
  json.dump(rules_to_save, f, indent=2)

print(f"Association rules saved to {rules_file}")