# I find it harder to explain the recursive version so i went for an answer using BFS

def height(root):
    queue = [root]
    height = -1
    while (len(queue)):
        length = len(queue)
        while (length > 0):
            node = queue.pop(0)
            if(node.left):
                queue.append(node.left)
            if(node.right):
                queue.append(node.right)
            length = length - 1
        height = height + 1
    return height