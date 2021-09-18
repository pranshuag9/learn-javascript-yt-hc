// FOR OF Loop maunly used for Iterables --------------------------------------
const names = [
    "YouTube",
    "Facebook",
    "Instagram",
    "Netflix",
    "Amazon"
]
for(const n of names){
    console.log(n);
}

// FOR IN Loop mainly used for Objects------------------------------------------
const symbols = {
    yt: "YouTube",
    ig: "Instagram",
    fb: "Facebook",
    nfx: "Netflix",
}

for(const n in symbols){
    console.log(n); // To access keys of object
    console.log(symbols[n]) // To access value corresponding to key n
}
// -----------------------------------------------------------------------------
// But we can use FOR IN loop with iterables like Arrays to index the indices
for(const n in names){
    console.log(n);
}
// -----------------------------------------------------------------------------
