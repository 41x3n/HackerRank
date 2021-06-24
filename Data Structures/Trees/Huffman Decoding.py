def decodeHuff(root, s):
    #Enter Your Code Here
    node = root
    for x in s:
        node = node.right if x == '1' else node.left
        if (node.right == None and node.left == None):
            print(node.data, end = '')
            node = root