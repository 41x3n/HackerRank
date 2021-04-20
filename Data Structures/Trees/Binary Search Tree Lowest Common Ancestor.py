def lca(root, v1, v2):
    #Enter your code here
    while(root):
        if (root.info < v1 and root.info < v2):
            root = root.right
        elif (root.info > v1 and root.info > v2):
            root = root.left
        else:
            break
    return root