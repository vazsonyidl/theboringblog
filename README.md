# The boring blog

Which actually is a long-term investment blog and community. The page and the community was created to share knowledge about long term investment. 

# Resources

Some useful resources will be listed here:

Benjamin Graham - The Intelligent Investor


# API for charts

The sad thing is, there is not really a lot of API available for this purposes, or all of
them are not free - and has a very strict free trial limitation.

My current idea is the following: 

1. Fetch the data as .csv files from Yahoo finance

    a, accomplish this with Next.js API
    
    b, take care of CORS
2. Consume the data on the UI

    a, use Recharts to display the charts