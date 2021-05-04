# Comment

msg = "Hello World"
print(msg)

#input('input ???' )

my_int = 1
msg = type(my_int)
print(msg)

my_int = 1.12
msg = type(my_int)
print(msg)

my_int = "qq"
msg = type(my_int)
print(msg)

my_int = '111'
msg = type(my_int)
print(msg)

msg = type(True)
print(msg)

msg = type(False)
print(msg)

# List
my_list = [1, 2, 3 ,'a','b','c']
print(my_list)
print(my_list[0])
my_list[0] = 4
print(my_list[0])
my_list.append("d")
print(my_list)
del my_list[4]
print(my_list)
print(my_list[:5])

# Tuple
my_tuple = (1, 2, 3 ,'a','b','c')

# packing
my_tuple = 1, 2, 3

# unpacking
num1, num2, num3 = my_tuple
num1, num2 = num2, num1

# 값을 변경 할 수 없음
# my_tuple[0] = 4

# Dictionary
my_dict = { 'man' : '남자', 'woman' : '여자'}
print(my_dict['man'])

my_int = 1
msg = type(my_int)
print(msg)

my_int = float(my_int)
msg = type(my_int)
print(msg)

my_int = str(my_int)
msg = type(my_int)
print(msg)

my_str = "coding"
my_str = list(my_str)
print(my_str)

# """  or ''' 은 여러줄 저장이 가능

my_str = """여러줄 저장이 가능하다
abc
가나다
"""
print(my_str)

my_str = "lang %s" % "python"
print(my_str)

# {}.format()
my_str = "lang {}" .format("python")
print(my_str)

my_plus = "{1} + {0} = {2}".format(1, 2, 3)
print(my_plus)

# Indexing
my_index = "lang python javascript"
print(my_index)

print(my_index[0])
print(my_index[1])
print(my_index[-1])

# Slicing
print(my_index[5:11])
print(my_index[5:])

# Split
print(my_index.split())

# Docstring
""" 
주석으로 사용
"""

# end , Escape code
print('lang' , end = 'nodejs\n')

print('lang\nnodejs\tpython')

for str in "coding":
    print(str)

for n in [0, 1, 2]:
    print(n)

for n in range(0, 3):
    print(n)

for n in range(20):
    print(n)    

# Comprehension
numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10]
ood_number = []

for number in numbers:
    if number %  2 == 1:
        ood_number.append(number)
print(ood_number)

ood_number = [number for number in numbers if number % 2 ==1 ]
print(ood_number)

# Membership

my_member = [1, 2, 3, 4, 5]
print( 1 in my_member)

my_dict = { 'key1':   'val1' , 'key2' : 'val2' , 'key3' : 'val3'}

for key in my_dict.keys():
    print(key)

for val in my_dict.values():
    print(val)

for key, val in my_dict.items():
    print(key, val)


# Function 
def add_mul (num1, num2):
    return num1 + num2, num1 * num2

print(add_mul(2, 3))

# Module
import random
lotto = range(1, 43)

print(random.choice(lotto))
print(random.sample(lotto, 6))

import datetime

print(datetime.datetime.now())


