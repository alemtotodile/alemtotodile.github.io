dataSetVersion = "2020-11-29"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Category",
    key: "stage",
    tooltip: "Check this to restrict characters.",
    checked: true,
    sub: [
	  { name: "Hosts", key: "host" },
      { name: "Season 1 BFDI characters", key: "s1" },
      { name: "Season 2 BFDIA characters", key: "s2" },
	  { name: "Season 3 IDFB characters", key: "s3" },
	  { name: "Season 4 BFB characters", key: "s4" },
	  { name: "Season 4 POST SPLIT characters", key: "s4b" },
	  { name: "Season 5 TPOT characters", key: "s5" },
	  { name: "TPOT Recommended Characters", key: "rc" },
	  { name: "BFDIA5b characters", key: "5b" },
	  { name: "Extra characters", key: "ex" },
	  { name: "Promotional characters", key: "pm" },
	  { name: "BFDI Mini characters", key: "m1" },
	  { name: "BFDI Mini Again characters", key: "m2" },
	  { name: "BFDI Mini Deluxe characters", key: "m3" },
	  { name: "Algebraliens", key: "num" },
	  { name: "Speaker Boxes", key: "sb" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Blocky",
    img: "H4OBe4y.png",
    opts: {
      stage: ["s1", "s4", "s4b"]
    }
  },
  {
    name: "Bubble",
    img: "0NRdPeO.png",
    opts: {
      stage: ["s1", "s3", "s4", "s4b", "5b"]
    }
  },
  {
    name: "Coiny",
    img: "QSMU4Ae.png",
    opts: {
      stage: ["s1", "s2", "s3", "s4", "s5"]
    }
  },
  {
    name: "David",
    img: "SrEm2Hs.png",
    opts: {
      stage: ["s1", "s4"]
    }
  },
  {
    name: "Eraser",
    img: "JoNy1Cs.png",
    opts: {
      stage: ["s1", "s4", "s5"]
    }
  },
  {
    name: "Firey",
    img: "dOzeQ8Q.png",
    opts: {
      stage: ["s1", "s2", "s3", "s4", "s4b"]
    }
  },
  {
    name: "Flower",
    img: "RepqYXM.png",
    opts: {
      stage: ["s1", "s3", "s4", "s4b"]
    }
  },
  {
    name: "Golf Ball",
    img: "YffK4Ex.png",
    opts: {
      stage: ["s1", "s2", "s3", "s4", "s5"]
    }
  },
  {
    name: "Ice Cube",
    img: "6BftVIQ.png",
    opts: {
      stage: ["s1", "s2", "s3", "s4", "s5", "5b"]
    }
  },
  {
    name: "Leafy",
    img: "CaFK3WY.png",
    opts: {
      stage: ["s1", "s3", "s4", "s4b"]
    }
  },
  {
    name: "Match",
    img: "eVvHQJb.png",
    opts: {
      stage: ["s1", "s2", "s4", "5b"]
    }
  },
  {
    name: "Needle",
    img: "Fy1rm5U.png",
    opts: {
      stage: ["s1", "s2", "s3", "s4", "s5"]
    }
  },
  {
    name: "Pen",
    img: "v67Xy96.png",
    opts: {
      stage: ["s1", "s4", "s5"]
    }
  },
  {
    name: "Pencil",
    img: "smAsT05.png",
    opts: {
      stage: ["s1", "s2", "s3", "s4", "5b"]
    }
  },
  {
    name: "Pin",
    img: "eJ2iaR1.png",
    opts: {
      stage: ["s1", "s2", "s3", "s4", "s5"]
    }
  },
  {
    name: "Rocky",
    img: "jBb1qII.png",
    opts: {
      stage: ["s1", "s2", "s3", "s4", "s5"]
    }
  },
  {
    name: "Snowball",
    img: "HXt1He6.png",
    opts: {
      stage: ["s1", "s4", "s5"]
    }
  },
  {
    name: "Spongy",
    img: "yoFG4K1.png",
    opts: {
      stage: ["s1", "s2", "s3", "s4", "s4b"]
    }
  },
  {
    name: "Teardrop",
    img: "Yvxkhdv.png",
    opts: {
      stage: ["s1", "s2", "s4", "s4b"]
    }
  },
  {
    name: "Tennis Ball",
    img: "VilUCx8.png",
    opts: {
      stage: ["s1", "s2", "s3", "s4", "s5"]
    }
  },
  {
    name: "Woody",
    img: "ITqGh7P.png",
    opts: {
      stage: ["s1", "s3", "s4", "s4b"]
    }
  }, 
  
  
  
  {
    name: "Bomby",
    img: "PMNiel7.png",
    opts: {
      stage: ["s2", "s3", "s4", "s5"]
    }
  },
  {
    name: "Book",
    img: "xjkNST6.png",
    opts: {
      stage: ["s2", "s3", "s4", "s5"]
    }
  },
  {
    name: "Donut",
    img: "OYnwKJh.png",
    opts: {
      stage: ["s2", "s4", "s5"]
    }
  },
  {
    name: "Dora",
    img: "zEucJPS.png",
    opts: {
      stage: ["s2", "s4"]
    }
  },
  {
    name: "Fries",
    img: "AkshIum.png",
    opts: {
      stage: ["s2", "s3", "s4", "s5"]
    }
  },
  {
    name: "Gelatin",
    img: "9vKnFhl.png",
    opts: {
      stage: ["s2", "s3", "s4", "s4b"]
    }
  },
  {
    name: "Nickel",
    img: "UjPemOe.png",
    opts: {
      stage: ["s2", "s3", "s4", "s5"]
    }
  },
  {
    name: "Puffball",
    img: "XukNkLz.png",
    opts: {
      stage: ["s2", "s4", "s5"]
    }
  },
  {
    name: "Ruby",
    img: "bCluY9S.png",
    opts: {
      stage: ["s2", "s3", "s4", "s4b"]
    }
  },
  {
    name: "Yellow Face",
    img: "HdP4zkK.png",
    opts: {
      stage: ["s2", "s3", "s4", "s5"]
    }
  },
  
  
  
  {
    name: "Evil Leafy",
    img: "2ck1ErG.png",
    opts: {
      stage: ["s3", "5b"]
    }
  }, 
  
  
  
  {
    name: "8-Ball",
    img: "hakbh0n.png",
    opts: {
      stage: ["s4"]
    }
  },
  {
    name: "Balloony",
    img: "J2kwVq7.png",
    opts: {
      stage: ["s4", "s4b"]
    }
  },
  {
    name: "Barf Bag",
    img: "tPNlY2Z.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Basketball",
    img: "BxvCO1X.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Bell",
    img: "SzKsNEc.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
    {
    name: "Black Hole",
    img: "JeifHzx.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Bottle",
    img: "LpXC8d7.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Bracelety",
    img: "SFNQyls.png",
    opts: {
      stage: ["s4"]
    }
  },
  {
    name: "Cake",
    img: "5I6Xliq.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Clock",
    img: "bMydI5D.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Cloudy",
    img: "Tbb2xlb.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Eggy",
    img: "eDpbcO0.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Fanny",
    img: "Ap26zYd.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Firey Jr.",
    img: "cj9WhQq.png",
    opts: {
      stage: ["s4"]
    }
  },
  {
    name: "Foldy",
    img: "ldyKiFx.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Gaty",
    img: "Jfntxyn.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Grassy",
    img: "xCg4UZZ.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Lightning",
    img: "0dcrJwv.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Liy",
    img: "yGz5FM8.png",
    opts: {
      stage: ["s4"]
    }
  },
  {
    name: "Lollipop",
    img: "4zmzDor.png",
    opts: {
      stage: ["s4", "s4b"]
    }
  },
  {
    name: "Loser",
    img: "Z2ddD8z.png",
    opts: {
      stage: ["s4", "s4b"]
    }
  },
  {
    name: "Marker",
    img: "KdblhqN.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Naily",
    img: "6KE1v9S.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Pie",
    img: "lDD7vK2.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Pillow",
    img: "te2wMrY.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Remote",
    img: "jkNFuSL.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Robot Flower",
    img: "uKTPAdM.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Roboty",
    img: "6MEj1a9.png",
    opts: {
      stage: ["s4"]
    }
  },
  {
    name: "Saw",
    img: "TUH8zqD.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "Stapy",
    img: "DyKSixB.png",
    opts: {
      stage: ["s4"]
    }
  },
  {
    name: "Taco",
    img: "HzMGON5.png",
    opts: {
      stage: ["s4", "s4b"]
    }
  },
  {
    name: "Tree",
    img: "3679zou.png",
    opts: {
      stage: ["s4", "s5"]
    }
  },
  {
    name: "TV",
    img: "O5kMLqX.png",
    opts: {
      stage: ["s4", "s5", "s2", "host"]
    }
  },
  
  
  
  {
    name: "Profily",
    img: "YqpLbXp.png",
    opts: {
      stage: ["s4b", "pm"]
    }
  },
  
  
  
  {
    name: "9-Ball",
    img: "H6B62xY.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Anchor",
    img: "f87BF9c.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Avocado",
    img: "YXq2IZc.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Battery",
    img: "xkYnWbJ.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Blender",
    img: "Wc8u7dp.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Boom Mic",
    img: "SNjOb3r.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Camera",
    img: "ctCR36U.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Clapboard",
    img: "n06f5UJ.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Conch Shell",
    img: "BfqQv1g.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Discy",
    img: "8P7Frgg.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Income Tax Return Document",
    img: "D3DPcWY.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Kitchen Sink",
    img: "i9lMv1I.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Leek",
    img: "aOlJX2p.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Nonexisty",
    img: "n6CuS5V.png",
    opts: {
      stage: ["s3", "rc"]
    }
  },
  {
    name: "Onigiri",
    img: "J1TOaAd.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "PDA",
    img: "w342xZR.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Price Tag",
    img: "0GVrzC4.png",
    opts: {
      stage: ["s5", "rc"]
    }
  },
  {
    name: "Rubber Spatula",
    img: "MpzyUCh.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Salt Lamp",
    img: "3KBxU4P.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Scissors",
    img: "9veXzTW.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Shampoo",
    img: "dxz248D.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Shopping Cart",
    img: "jBphiDk.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Snare Drum",
    img: "kXWba5H.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Tape",
    img: "upDw1uN.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "VHSy",
    img: "vm2sS85.png",
    opts: {
      stage: ["rc"]
    }
  },
  {
    name: "Winner",
    img: "f3BhrA1.png",
    opts: {
      stage: ["s5", "rc"]
    }
  },
  
  
  
  {
    name: "Lego Brick",
    img: "1KLwm0Q.png",
    opts: {
      stage: ["5b"]
    }
  },
  {
    name: "Waffle",
    img: "dSZkBkc.png",
    opts: {
      stage: ["5b"]
    }
  },
  {
    name: "Tune",
    img: "eZRnMeM.png",
    opts: {
      stage: ["5b"]
    }
  },
  {
    name: "Get Well Card",
    img: "IAXXld1.png",
    opts: {
      stage: ["5b"]
    }
  }, 
  
  
  
  {
    name: "Purple Face",
    img: "gUQTT9U.png",
    opts: {
      stage: ["ex", "host"]
    }
  },
  {
    name: "Clip",
    img: "Kn4Hrz9.png",
    opts: {
      stage: ["ex"]
    }
  },
  {
    name: "Rusty Coin",
    img: "1ypJAXy.png",
    opts: {
      stage: ["ex"]
    }
  },
  {
    name: "Steamy",
    img: "F5rx2X3.png",
    opts: {
      stage: ["ex"]
    }
  },
  {
    name: "Portable Music Player",
    img: "SgW20Mr.png",
    opts: {
      stage: ["ex"]
    }
  },
  {
    name: "Boombox",
    img: "pMHA9KT.png",
    opts: {
      stage: ["ex"]
    }
  },
  
  
  
  {
    name: "Grandfather Clock",
    img: "PV82qE1.png",
    opts: {
      stage: ["pm"]
    }
  },
  {
    name: "Metronome",
    img: "UIjee9b.png",
    opts: {
      stage: ["pm"]
    }
  },
  {
    name: "Bone",
    img: "WnFKrMt.png",
    opts: {
      stage: ["pm"]
    }
  },
  {
    name: "Pumpkin",
    img: "p5qAl7S.png",
    opts: {
      stage: ["pm"]
    }
  },
  {
    name: "Fry",
    img: "VvOGrjX.png",
    opts: {
      stage: ["pm"]
    }
  },
  {
    name: "Swappy",
    img: "Zw0oAmV.png",
    opts: {
      stage: ["pm"]
    }
  },
  {
    name: "Shirty",
    img: "Y2PF9wr.png",
    opts: {
      stage: ["pm"]
    }
  },
  {
    name: "Member",
    img: "YSSUoy3.png",
    opts: {
      stage: ["pm"]
    }
  },
  {
    name: "Superfan",
    img: "Jjber82.png",
    opts: {
      stage: ["pm"]
    }
  },
  {
    name: "Drear-Top",
    img: "kNM2zfh.png",
    opts: {
      stage: ["pm"]
    }
  },
  {
    name: "World Map",
    img: "ZH0yzJ0.png",
    opts: {
      stage: ["pm"]
    }
  },
  {
    name: "VR Headset",
    img: "CaWf3eJ.png",
    opts: {
      stage: ["pm"]
    }
  },
  
  
  
  {
    name: "A Duck",
    img: "eK3qCmi.png",
    opts: {
      stage: ["m1"]
    }
  },
  {
    name: "Evidence Bag",
    img: "dvC5EfY.png",
    opts: {
      stage: ["m1"]
    }
  },
  {
    name: "Frozen Yogurt",
    img: "M74P7Lf.png",
    opts: {
      stage: ["m1", "m3"]
    }
  },
  {
    name: "Glue",
    img: "M0px4eI.png",
    opts: {
      stage: ["m1"]
    }
  },
  {
    name: "jack russell terrier dog[...]",
    img: "uB3puF8.png",
    opts: {
      stage: ["m1"]
    }
  },
  {
    name: "Pastel Feather",
    img: "C4c1u1d.png",
    opts: {
      stage: ["m1"]
    }
  },
  {
    name: "Purple Girl with Wind Hair and Angry Eyes",
    img: "MzspSn3.png",
    opts: {
      stage: ["m1", "m2"]
    }
  },
  {
    name: "Rose",
    img: "NoNHirC.png",
    opts: {
      stage: ["m1", "m2"]
    }
  },
  
  
  
  {
    name: "Crystal",
    img: "so1804s.png",
    opts: {
      stage: ["m2"]
    }
  },
  {
    name: "Deadly",
    img: "y1fUA1V.png",
    opts: {
      stage: ["m2"]
    }
  },
  {
    name: "Electric Guitar",
    img: "lb8hKRL.png",
    opts: {
      stage: ["m2"]
    }
  },
  {
    name: "Kebab",
    img: "tEzdBoM.png",
    opts: {
      stage: ["m2"]
    }
  },
  ,
  {
    name: "Juicebox",
    img: "4Dz7VRj.png",
    opts: {
      stage: ["m2"]
    }
  },
  {
    name: "Strudel",
    img: "x6e1XiL.png",
    opts: {
      stage: ["m2"]
    }
  },
  {
    name: "Tent",
    img: "fvuKLn4.png",
    opts: {
      stage: ["m2"]
    }
  },
  {
    name: "Vacuum",
    img: "2TsADsj.png",
    opts: {
      stage: ["m2"]
    }
  },
  
  
  
  {
    name: "Banana Apple",
    img: "gfR87Wf.png",
    opts: {
      stage: ["m3"]
    }
  },
  {
    name: "Credit Card",
    img: "feU23Xt.png",
    opts: {
      stage: ["m3"]
    }
  },
  {
    name: "Lithium",
    img: "ti5mUyb.png",
    opts: {
      stage: ["m3"]
    }
  },
  {
    name: "Mocha",
    img: "9rCu1Jf.png",
    opts: {
      stage: ["m3"]
    }
  },
  {
    name: "Puppet",
    img: "wSerHd3.png",
    opts: {
      stage: ["m3"]
    }
  },
  {
    name: "Ramune",
    img: "nOxne51.png",
    opts: {
      stage: ["m3"]
    }
  },
  {
    name: "Teabag",
    img: "GWBAWXA.png",
    opts: {
      stage: ["m3"]
    }
  },
  {
    name: "USB",
    img: "lo9wsD2.png",
    opts: {
      stage: ["m3"]
    }
  },
  {
    name: "Yellow Watermelon",
    img: "RI7uzPs.png",
    opts: {
      stage: ["m3"]
    }
  },
  {
    name: "Announcer",
    img: "jFsT02i.png",
    opts: {
      stage: ["host", "sb"]
    }
  },
  {
    name: "Flower Speaker Box",
    img: "Mlz0zEz.png",
    opts: {
      stage: ["host", "sb"]
    }
  },
  {
    name: "Firey Speaker Box",
    img: "o9Sb8Rm.png",
    opts: {
      stage: ["host", "sb"]
    }
  },
  {
    name: "Puffball Speaker Box",
    img: "aCjSlbG.png",
    opts: {
      stage: ["host", "sb"]
    }
  },
  {
    name: "HelloKevin",
    img: "u8jfaSC.png",
    opts: {
      stage: ["pm"]
    }
  },
  {
    name: "Four",
    img: "SVYU28o.png",
    opts: {
      stage: ["host", "num"]
    }
  },
  {
    name: "X",
    img: "Lhn6Rzj.png",
    opts: {
      stage: ["host", "num"]
    }
  },
  {
    name: "Two",
    img: "YLDd9zS.png",
    opts: {
      stage: ["host", "num"]
    }
  },
  
  {
    name: "Six",
    img: "YxGdNst.png",
    opts: {
      stage: ["num"]
    }
  },
  {
    name: "Seven",
    img: "RhKjbLt.png",
    opts: {
      stage: ["num"]
    }
  },
  {
    name: "Eight",
    img: "SoxotOv.png",
    opts: {
      stage: ["num"]
    }
  },
  {
    name: "Nine",
    img: "rkD4BDa.png",
    opts: {
      stage: ["num"]
    }
  },
  
  {
    name: "Zero",
    img: "TbSRo79.png",
    opts: {
      stage: ["num"]
    }
  },
  {
    name: "One",
    img: "epG5oAw.png",
    opts: {
      stage: ["num"]
    }
  },
  {
    name: "Three",
    img: "U36mGyj.png",
    opts: {
      stage: ["num"]
    }
  },
  {
    name: "Five",
    img: "hL78JEw.png",
    opts: {
      stage: ["num"]
    }
  },
  
  
  {
    name: "CRT",
    img: "rtmWH1m.png",
    opts: {
      stage: ["ex"]
    }
  },
  {
    name: "Bugs",
    img: "ET3AWic.png",
    opts: {
      stage: ["ex"]
    }
  },
  {
    name: "Fish Monster",
    img: "UCSZTbQ.png",
    opts: {
      stage: ["ex"]
    }
  },
  
  
  
  
  
  {
    name: "Firey Speaker Box's Clone",
    img: "Jw5P3hG.png",
    opts: {
      stage: ["sb"]
    }
  },
  {
    name: "Triangle Speaker Box",
    img: "l6lrQRy.png",
    opts: {
      stage: ["sb"]
    }
  },
  {
    name: "Hexagon Speaker Box",
    img: "iUNek24.png",
    opts: {
      stage: ["sb"]
    }
  },
  {
    name: "Circular Flying Speaker Box",
    img: "5fOMJMC.png",
    opts: {
      stage: ["sb"]
    }
  },
  {
    name: "Speaker Box that throws spike balls uncontrollably",
    img: "pXx8JbV.png",
    opts: {
      stage: ["sb"]
    }
  },
  {
    name: "Leafy Speaker Box",
    img: "KRKFZ4Z.png",
    opts: {
      stage: ["sb"]
    }
  },
  {
    name: "Teardrop Speaker Box",
    img: "sdSSbko.png",
    opts: {
      stage: ["sb"]
    }
  },
  {
    name: "The Cheese Orb",
    img: "IIKMP0f.png",
    opts: {
      stage: ["sb"]
    }
  },
  
  
  {
    name: "a",
    img: "Fdo7UgB.png",
    opts: {
      stage: ["ex", "num"]
    }
  }
  
  
];
