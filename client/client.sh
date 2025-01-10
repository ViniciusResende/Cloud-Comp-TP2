wget --server-response \
    --output-document response.out \
    --header='Content-Type: application/json' \
    --post-data '{"songs": ["This Is How We Roll", "Crash And Burn", "Ready Set Roll"]}' \
    http://10.43.253.217:30502/api/recommend