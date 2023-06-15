export default function handler(req, res) {
 
    const tokenId = req.query.tokenId;
  
    
    const image_url =  "https://github.com/TSHEPO-CLOUD/encode-capstone-project/tree/main/my-app/public/encodedevs"
    
    res.status(200).json({
      name: "Encode Dev #" + tokenId,
      description: "Encode Dev is a collection of Encode Club developers in crypto",
      image: image_url + tokenId + ".svg",
    });
  }