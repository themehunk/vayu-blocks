
export default function getThemeData(type){

    let vayBlocks = '';
    let hunkCompanion = 'hunk-companion/hunk-companion.php';

    
  const themeList = [ { 
    vayu:[
      { 
        type:'theme', template: 'free', name: 'vayu-x',free:vayBlocks,paid:'vayu-x', builder:'gutenberg'
      },
    ],
  gutenberg:[
    {
    type:'plugin', template: 'free', name: 'th-shop-mania',free:hunkCompanion,paid:'th-shop-mania-pro'
    }
  ]
  }
];

  switch(type){
    case "vayu-x" : return themeList[0].vayu[0];
    case "gutenberg" : return themeList[0].gutenberg[0];
    default: return  themeList[0].shopmania[0];
}

  }