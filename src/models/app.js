const treeData = [
    {
      "title": "1.",
      "subtitle": "asdasd",
      "expanded": false,
      "img": "/jira/secure/viewavatar?size=xsmall&avatarId=10600&avatarType=issuetype",
      "issueKey": "childrens-0",
      "children": []
    },
    {
        "title": "1.",
        "subtitle": "asdasd",
        "expanded": false,
        "img": "/jira/secure/viewavatar?size=xsmall&avatarId=10600&avatarType=issuetype",
        "issueKey": "childrens-0",
        "children": []
      },
    {
      "title": "2.",
      "subtitle": "asdasd",
      "expanded": false,
      "img": "/jira/secure/viewavatar?size=xsmall&avatarId=10601&avatarType=issuetype",
      "issueKey": "parent",
      "children": [
        {
          "title": "2.1.",
          "subtitle": "asdasd",
          "expanded": false,
          "img": "/jira/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
          "issueKey": "Child-1",
          "children": []
        }
      ]
    },
    {
      "title": "3.",
      "subtitle": "asdasdasd",
      "expanded": false,
      "img": "/jira/secure/viewavatar?size=xsmall&avatarId=10601&avatarType=issuetype",
      "issueKey": "parent",
      "children": [
        {
          "title": "3.1.",
          "subtitle": "asdasas",
          "expanded": false,
          "img": "/jira/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
          "issueKey": "children-1",
          "children": [
            {
                "title": "3.1.1.",
                "subtitle": "asdasd",
                "expanded": false,
                "img": "/jira/secure/viewavatar?size=xsmall&avatarId=10600&avatarType=issuetype",
                "issueKey": "children-2",
                "children": []
              },
            {
              "title": "3.1.1.",
              "subtitle": "asdasd",
              "expanded": false,
              "img": "/jira/secure/viewavatar?size=xsmall&avatarId=10600&avatarType=issuetype",
              "issueKey": "children-2.1",
              "children": []
            }
          ]
        }
      ]
    }
  ]

  function *processData(data){
    if (!data) { return; }

    for (var i = 0; i< data.length; i++){
    var val = data[i];
    yield val.issueKey;

    if (val.children) {
    yield *processData(val.children);
    }
    }
    }

    var it = processData(treeData);
    var res = it.next();

    // while(!res.done){
    // console.log(res.value);
    // res = it.next();
    // }

console.log(treeData[2][2])