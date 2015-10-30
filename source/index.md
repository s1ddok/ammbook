---
title: API Reference

language_tabs:
  - Пример1
  - Пример2
  - Пример3

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true
---

# Жорданова форма

<p class="right example1" markdown="1">
1. Пусть характеристический многочлен матрицы $$A_\epsilon$$ имеет вид

$$\phi(\lambda)=(-1)^3(\lambda-\lambda_1)(\lambda-\lambda_2)(\lambda-\lambda_3),$$
где $$\lambda_i=\lambda_j$$ $$(i=j)$$.

Тогда жорданова форма матрицы имеет вид
$$A_f=\left\{
\begin{array}{lll}
\lambda_1 & 0 & 0\\
0 & \lambda_2 & 0\\
0 & 0 & \lambda_3
\end{array}
\right\}.
 $$
 </p>
 <p class="right example2">
 $$\setCounter{0}$$require 'kittn'

 api = Kittn::APIClient.authorize!('meowmeowmeow')
 api.kittens.get

 $$A_e-2I=\left\{\begin{array}{lll}
 -2 & 1 & 0\\
 -4 & 2a & 0\\
 -2 & 1 & 0
 \end{array}---\begin{array}{lll}
 -2 & 1 & 0
 \end{array}\right\}.$$

 Следовательно,

 $$k=3-rang(A_e-2I)=3-1=2,$$

 поэтому жорданова форма имеет вид

 $$A_f=\left\{\begin{array}{lll}
 2 & 1 & 0\\
 0 & 2 & 0\\
 0 & 0 & 2
 \end{array}\right\}$$ \ \ \ или \ \ \
 $$A_f=\left\{\begin{array}{lll}
 2 & 0 & 0\\
 0 & 2 & 1\\
 0 & 0 & 2
 \end{array}\right\}$$.

 Найдем собственный вектор $$x$$,соответствующий собственному значению $$\lambda=2$$. Так как он удовлетворяет условию $$(A_e-2I)x=\Theta$$, то решим систему
 </p>

 1. Пусть характеристический многочлен матрицы $$A_(\epsilon)$$ имеет вид

 $$\phi(\lambda)=(-1)^3(\lambda-\lambda_1)(\lambda-\lambda_2)(\lambda-\lambda_3),$$
 где $\lambda_i=\lambda_j$$ $$(i=j)$.

 Тогда жорданова форма матрицы имеет вид
 $$A_f=\left\{
 \begin{array}{lll}
 \lambda_1 & 0 & 0\\
 0 & \lambda_2 & 0\\
 0 & 0 & \lambda_3
 \end{array}
 \right\}.
  $$

 2. Пусть характеристический многочлен матрицы $$A_(\epsilon)$$ имеет вид

 $$\phi(\lambda)=(-1)^3(\lambda-\lambda_1)^2(\lambda-\lambda_2),$$
 где $$\lambda_i=\lambda_j$$ $$(i=j)$$.

 Возможны два случая:

 1)$$rang(A_\epsilon-\lambda_1I)=1$$, поэтому $$k_1=3-rang(A_\epsilon-\lambda_1I)=2$$ и, следовательно, $$\alpha_1=k_1$$, а значит, жорданова форма содержит две жордановы клетки с собственным значением   $$\lambda_1$$:
 $$A_f=\left\{
 \begin{array}{lll}
 \lambda_1 & 0 & 0\\
 0 & \lambda_1 & 0\\
 0 & 0 & \lambda_2
 \end{array}
 \right\}
  $$;

 2)$$rang(A_\epsilon-\lambda_1I)=2$$, поэтому $$k_1=3-rang(A_\epsilon-\lambda_1I)=1$$ и, следовательно, жорданова форма содержит одну жорданову клетку с собственным значением   $$\lambda_1$$:
 $$A_f=\left\{
 \begin{array}{lll}
 \lambda_1 & 1 & 0\\
 0 & \lambda_1 & 0\\
 0 & 0 & \lambda_2
 \end{array}
 \right\}
  $$.

 3. Пусть характеристический многочлен матрицы $$A_(\epsilon)$$ имеет вид
<p>
 $$\phi(\lambda)=(-1)^3(\lambda-\lambda_1)^3.$$
 </p>

 Возможны два случая:

 1)$$rang(A_\epsilon-\lambda_1I)=1$$, поэтому $$k_1=3-rang(A_\epsilon-\lambda_1I)=2$$ и, следовательно, $$\alpha_1=k_1$$, а значит, жорданова форма содержит две жордановы клетки с собственным значением   $$\lambda_1$$:
 $$A_f=\left\{
 \begin{array}{lll}
 \lambda_1 & 1 & 0\\
 0 & \lambda_1 & 0\\
 0 & 0 & \lambda_1
 \end{array}
 \right\}
  $$;

 2)$$rang(A_\epsilon-\lambda_1I)=2$$, поэтому $$k_1=3-rang(A_\epsilon-\lambda_1I)=1$$ и, следовательно, жорданова форма содержит одну жорданову клетку с собственным значением   $$\lambda_1$$:
 $$A_f=\left\{
 \begin{array}{lll}
 \lambda_1 & 1 & 0\\
 0 & \lambda_1 & 1\\
 0 & 0 & \lambda_1
 \end{array}
 \right\}
 $$.


  Пример 1. Найти жорданову форму и жорданов базис матрицы  оператора $$A_f=\left\{
 \begin{array}{lll}
 0 & 1 & 0\\
 0 & \lambda_1 & 0\\
 -2 & 1 & 2
 \end{array}
 \right\}
  $$.

 Решение.

 Вычислим

 $$\phi(\lambda)=det(A_e-\lambda I)=\|
 \begin{array}{lll}
 -\lambda & 1 & 0\\
 -4 & 4-\lambda & 0\\
 -2 & 1 & 2- \lambda
 \end{array}\|=(2-\lambda)^3$$,

 следовательно, собственное значение $$\lambda=2$$, $$\alpha=3$$.

 Найдем геометрическую кратность собственного значения $$\lambda$$. Для этого посчитаем ранг матрицы

 $$A_e-2I=\left\{\begin{array}{lll}
 -2 & 1 & 0\\
 -4 & 2a & 0\\
 -2 & 1 & 0
 \end{array}---\begin{array}{lll}
 -2 & 1 & 0
 \end{array}\right\}.$$

 Следовательно,

 $$k=3-rang(A_e-2I)=3-1=2,$$

 поэтому жорданова форма имеет вид

 $$A_f=\left\{\begin{array}{lll}
 2 & 1 & 0\\
 0 & 2 & 0\\
 0 & 0 & 2
 \end{array}\right\}$$ \ \ \ или \ \ \
 $$A_f=\left\{\begin{array}{lll}
 2 & 0 & 0\\
 0 & 2 & 1\\
 0 & 0 & 2
 \end{array}\right\}$$.

 Найдем собственный вектор $$x$$,соответствующий собственному значению $$\lambda=2$$. Так как он удовлетворяет условию $$(A_e-2I)x=\Theta$$, то решим систему
<p>
 $$\begin{array}{lll}
 -2 & 1 & 0\\
 -4 & 2 & 0\\
 -2 & 1 & 0
 \end{array}---\begin{array}{lll}
 -2 & 1 & 0
 \end{array}.$$
 </p>

 Следовательно, координаты собственного вектора $$x=(x_1,x_2,x_3)$$ удовлетворяют уравнению $$-2x_1+x_2+0\c dot x_3=0$$.

 Заметим, что коэффициент при $$x_3$$ равен 0, поэтому $$x_3$$ может принимать любые значения. Отбрасывать $$x_3$$ нельзя!

 Для нахождения ФСР построить таблицу

<div style="width:50%">
 $$
 \begin{array}{lll}
 x-1 & x-2 & x_3\\
 1 & 2 & 0\\
 0 & 0 & 1
 \end{array}---\begin{array}{lll}
 -2 & 1 & 0
 \end{array}
 $$
 </div>

 Векторы $$e_1=(1,2,0)$$, $$e_2=(0,0,1)$$ образуют фундаментальную систему решений в собственном подпространстве $$L(2)={x:Ax=2x}$$, поэтому любой собственный вектор, отвечающий собственному значению $$\lambda=2$$, линейно через них выражается.

# Introduction

 Welcome to the Kittn API! You can use our API to access Kittn API endpoints, which can get information on various cats, kittens, and breeds in our database.

 We have language bindings in Shell, Ruby, and Python! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

 This example API documentation page was created with [Slate](http://github.com/tripit/slate). Feel free to edit it and use it as a base for your own API's documentation.

 # Authentication

 > To authorize, use this code:

 ```ruby
 require 'kittn'

 api = Kittn::APIClient.authorize!('meowmeowmeow')
 ```

 ```python
 import kittn

 api = kittn.authorize('meowmeowmeow')
 ```

 ```shell
 # With shell, you can just pass the correct header with each request
 curl "api_endpoint_here"
   -H "Authorization: meowmeowmeow"
 ```

 > Make sure to replace `meowmeowmeow` with your API key.
 More math:
 $$
 x+1\over\sqrt{1-x^2}\\\
 \begin{bmatrix}
 0  & -2     & 1      &        & -1     & 2  \\
 2  & \ddots & \ddots & \ddots &        & -1 \\
 -1 & \ddots & \ddots & \ddots & \ddots &    \\
    & \ddots & \ddots & \ddots & \ddots & 1  \\
 1  &        & \ddots & \ddots & \ddots & -2 \\
 -2 & 1      &        & -1     & 2      & 0
 \end{bmatrix}
 $$
 \documentclass{article}

Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our [developer portal](http://example.com/developers).

Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: meowmeowmeow`

<aside class="notice">
You must replace <code>meowmeowmeow</code> with your personal API key.
</aside>

# Kittens

## Get All Kittens

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```shell
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Isis",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get(2)
```

```shell
curl "http://example.com/api/kittens/2"
  -H "Authorization: meowmeowmeow"
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Isis",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific kitten.

<aside class="warning">If you're not using an administrator API key, note that some kittens will return 403 Forbidden if they are hidden for admins only.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve
