arr = []


def in_order(root):
    if root:
        in_order(root.left)
        arr.append(root.data)
        in_order(root.right)


def check_binary_search_tree_(root):
    in_order(root)
    for i in range(len(arr) - 1):
        if arr[i] >= arr[i + 1]:
            return False
    return True