def topView(root):
    #Write your code here
    queue = [[root, 0]]
    dict = {}
    while (len(queue)):
        length = len(queue)
        while (length > 0):
            node = queue.pop(0)
            if ( not node[1] in dict.keys()):
                dict[node[1]] = node[0].info
            if(node[0].left):
                queue.append([node[0].left, node[1] - 1])
            if(node[0].right):
                queue.append([node[0].right,  node[1] + 1])
            length = length - 1
    arr = dict.keys()
    arr = list(arr)
    arr.sort()
    print(' '.join([str(dict[elem]) for elem in arr]))