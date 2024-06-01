const sampleData = [
    {
        title: "Luxurious Beach House",
        description: "Spacious villa with stunning ocean views",
        price: 2500,
        image: {
            url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            filename: 'listingimage'
          },
        location: "Miami Beach, Florida",
        country: "USA"
    },
    {
        title: "Cozy Mountain Cabin",
        description: "Quaint cabin nestled in the mountains",
        price: 800,
        image: {
            url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            filename: 'listingimage'
          },
        location: "Aspen, Colorado",
        country: "USA"
    },
    {
        title: "Urban Loft Downtown",
        description: "Modern loft with city skyline views",
        price: 1200,
        image: {
            url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            filename: 'listingimage'
          },
        location: "New York City, New York",
        country: "USA"
    },
    {
        title: "Riverside Retreat",
        description: "Charming cottage by the river",
        price: 1000,
        image: {
            url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            filename: 'listingimage'
          },
        location: "Cotswolds, England",
        country: "United Kingdom"
    },
    {
        title: "Secluded Forest Cabin",
        description: "Tranquil cabin surrounded by nature",
        price: 600,
        image: {
            url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            filename: 'listingimage'
          },
        location: "Black Forest, Germany",
        country: "Germany"
    },
    {
        title: "Sunny Beach Apartment",
        description: "Bright apartment just steps from the beach",
        price: 1800,
        image: {
            url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            filename: 'listingimage'
          },
        location: "Barcelona, Spain",
        country: "Spain"
    },
    {
        title: "Historic Townhouse",
        description: "Elegant townhouse in the heart of the city",
        price: 2000,
        image: {
            url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            filename: 'listingimage'
          },
        location: "Paris, France",
        country: "France"
    },
    {
        title: "Mountain View Chalet",
        description: "Cozy chalet with breathtaking mountain views",
        price: 1500,
        image: {
            url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            filename: 'listingimage'
          },
        location: "Swiss Alps, Switzerland",
        country: "Switzerland"
    },
    {
        title: "Lakefront Cottage",
        description: "Quaint cottage overlooking a peaceful lake",
        price: 900,
        image: {
            url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            filename: 'listingimage'
          },
        location: "Muskoka, Ontario",
        country: "Canada"
    },
    {
        title: "Tropical Paradise Villa",
        description: "Luxurious villa surrounded by lush tropical gardens",
        price: 3000,
        image: {
            url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            filename: 'listingimage'
          },
        location: "Bali, Indonesia",
        country: "Indonesia"
    },
    
        {
            title: "Seaside Bungalow",
            description: "Quaint bungalow with panoramic ocean views",
            price: 1200,
            image: {
                url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                filename: 'listingimage'
              },
            location: "Maui, Hawaii",
            country: "USA"
        },
        {
            title: "Mountain Retreat",
            description: "Serene retreat nestled in the foothills",
            price: 900,
            image: {
                url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                filename: 'listingimage'
              },
            location: "Lake Tahoe, California",
            country: "USA"
        },
        {
            title: "Cosy Countryside Cottage",
            description: "Charming cottage surrounded by rolling hills",
            price: 700,
            image: {
                url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                filename: 'listingimage'
              },
            location: "Cotswolds, England",
            country: "United Kingdom"
        },
        {
            title: "Lakeside Cabin",
            description: "Rustic cabin with stunning lake views",
            price: 1000,
            image: {
                url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                filename: 'listingimage'
              },
            location: "Banff, Alberta",
            country: "Canada"
        },
        {
            title: "Modern City Apartment",
            description: "Sleek apartment in the heart of downtown",
            price: 1500,
            image: {
                url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                filename: 'listingimage'
              },
            location: "Tokyo, Japan",
            country: "Japan"
        },
        {
            title: "Beachfront Condo",
            description: "Contemporary condo with direct beach access",
            price: 2000,
            image: {
                url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                filename: 'listingimage'
              },
            location: "Gold Coast, Aust ralia",
            country: "Australia"
        },
        {
            title: "Rural Farmhouse",
            description: "Idyllic farmhouse surrounded by fields",
            price: 800,
            image: {
                url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                filename: 'listingimage'
              },
          
            location: "Tuscany, Italy",
            country: "Italy"
        }]
        module.exports={data:sampleData}
    


     
