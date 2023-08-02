export const GET = async() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 2);

    const products = [{
        brand: "Nike",
        price: "119.99",
        model: "Air Force",
        images: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/sapatilhas-air-force-1-07-GjGXSP.png",
        currency: "€",
        dropDate: date,
        links: {
            svd: "https://www.sivasdescalzo.com/pt",
            end: "https://www.endclothing.com/eu",
            nike: "https://www.nike.com/launch",
            sns: "https://www.sneakersnstuff.com/"
        },
    }, {
        brand: "Nike",
        price: "119.99",
        model: "Dunk Low",
        images: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/59ea4d4c-6472-4673-82de-70b698a5075c/sapatilhas-dunk-low-7N7T7n.png",
        currency: "€",
        dropDate: date,
        links: {
            svd: "https://www.sivasdescalzo.com/pt",
            end: "https://www.endclothing.com/eu",
            nike: "https://www.nike.com/launch",
            sns: "https://www.sneakersnstuff.com/"
        },
    }, {
        brand: "Nike",
        price:"179.99",
        model:"Jordan 1",
        images: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d5a994ae-0622-4d79-a1ac-7f00fd0f9f45/sapatilhas-air-jordan-1-mid-junior-t5sGjQ.png",
        currency: "€",
        dropDate: date,
        links: {
            svd: "https://www.sivasdescalzo.com/pt",
            end: "https://www.endclothing.com/eu",
            nike: "https://www.nike.com/launch",
            sns: "https://www.sneakersnstuff.com/"
        },
    }];

    return new Response(JSON.stringify(products), {status: 200})
}