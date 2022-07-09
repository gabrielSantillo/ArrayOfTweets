//This is a  array of object with 10 tweets, or, lenght ten
let tweets = [
    {
        tweet: `Random text from Gabriel`,
        username: `Gabriel`,
        created_at: `07-09-2022`,
        age: 26
    }, 
    {
        tweet: `Random text from Alex`,
        username: `Alex`,
        created_at: `07-09-2022`,
        age: 35
    },
    {
        tweet: `Random text from Satinder`,
        username: `Satinder`,
        created_at: `07-09-2022`,
        age: 30
    },
    {
        tweet: `Random text from Tyler`,
        username: `Tyler`,
        created_at: `07-09-2022`,
        age: 30
    },
    {
        tweet: `Random text from Zach`,
        username: `Zach`,
        created_at: `07-09-2022`,
        age: 29
    },
    {
        tweet: `Random text from Nadine`,
        username: `Nadine`,
        created_at: `07-09-2022`,
        age: 40
    },
    {
        tweet: `Random text from Colleen`,
        username: `Colleen`,
        created_at: `07-09-2022`,
        age: 30
    },
    {
        tweet: `Random text`,
        username: `Josh`,
        created_at: `07-09-2022`,
        age: 17
    },
    {
        tweet: `Random text from James`,
        username: `James`,
        created_at: `07-09-2022`,
        age: 30
    },
    {
        tweet: `Random text from Hani`,
        username: `Hani`,
        created_at: `07-09-2022`,
        age: 16
    },
]

//this while loop is running into the array of tweets and looking for ages above 18 to print out the tweet, the username and the day that was created
let counter = 0;
while(counter < tweets.length) {
    if(tweets[counter][`age`] >= 18) {
        console.log(`The tweet is ${tweets[counter][`tweet`]}. Wrote by ${tweets[counter][`username`]} and created at: ${tweets[counter][`created_at`]}`)
    }
    counter++;
}

//this for loop is running into the array of tweets and looking for ages under 18 to print out the tweet, the username and the day that was created
for(let counter = 0; counter < tweets.length; counter++) {
    if(tweets[counter][`age`] < 18) {
        console.log(`The tweet is ${tweets[counter][`tweet`]}. Wrote by ${tweets[counter][`username`]} and created at: ${tweets[counter][`created_at`]}`)
    }
}