
Tast1:-

Content creators monetize their websites/blogs by showing advertisements. Usually they
receive money per 1000 impressions (1000 ad views) which is called as Cost Per Impression or
CPI. Content creators a.k.a publishers will insert a script that will call multiple sources or ad
providers and each of them will return an ad they wish to show for that slot on the publisher’s
page. They also return the CPI value for their ads, this enables the publishers to select the ad
paying the highest money and show it. This is also called as a client side bidding, where ad
providers bid for the ad slot on a publisher. The project involves writing client side code, calling
and displaying ads and a server that returns a list of ads through an API. For more information
please google client side header bidding. Speed and efficiency is very important while
requesting multiple advertiser APIs to enable the ad to load quickly.

Tasks:
1. Make a single page website with 2 ad slots.
2. Write and deploy an advertiser api which returns a random ad from the list of available
ads and it’s CPI(cost per impression) which the advertiser will pay for every 1000
impressions of the ad. For simplicity assume the ad to be a simple html image tag with a
href to advertisers website.
3. A client side bidding code that calls all the available advertisers,selects the best two
based on the CPI.
4. Whenever the ad is clicked,record conversions on your


## Running the application

### Start Server

Change directory to server
`cd Server`

Install dependencies
`npm install`

Run server
`npm run start`

### Client

Change directory to Client
`cd Client`

Run client by opening `index.html` on browser

## Demo Links


