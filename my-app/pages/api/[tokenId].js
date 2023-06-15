export default function handler(req, res) {
 
    const tokenId = req.query.tokenId;
  
    const src = "encode-capstone-project/my-app/public/encodedevs/";
    
    res.status(200).json({
      name: "Encode Dev #" + tokenId,
      description: "Encode Dev is a collection of Encode Club developers in crypto",
      image: src + tokenId + ".svg",
    });
  }