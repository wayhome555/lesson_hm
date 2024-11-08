# 
def Merge(dict1, dict2):
    """
    合并两个字典。

    参数：
    dict1：字典1。
    dict2：字典2。

    返回值：
    合并后的字典。
    """
    # 使用 ** 操作符将字典 dict1 和 dict2 合并成一个新的字典
    res = {**dict1, **dict2}

    return res


# js对象字面量 python 字典 key:value 键值对
dict1 = {"name": "guo", "age": 25}
dict2 = {"name": "long", "city": "dixia"}
dict3 = Merge(dict1, dict2)
print(dict3)


