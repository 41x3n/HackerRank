def levelOrder(root):
    #Write your code here
    queue = [root]
    while (len(queue)):
        length = len(queue)
        while (length > 0):
            node = queue.pop(0)
            print(node.info, end = ' ')
            if(node.left):
                queue.append(node.left)
            if(node.right):
                queue.append(node.right)
            length = length - 1