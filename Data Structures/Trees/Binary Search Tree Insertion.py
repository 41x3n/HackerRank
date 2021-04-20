def insert(self, val):
    #Enter you code here.
    node = Node(val)
    if (self.root == None):
        self.root = node
    current = self.root
    while (True):
        if (current.info == val):
            return None
        if (current.info > val):
            if(current.left == None):
                current.left = node
                return self
            current = current.left
        if (current.info < val):
            if(current.right == None):
                current.right = node
                return self
            current = current.right