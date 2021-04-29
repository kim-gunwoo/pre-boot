// Array 배열 제어

// 추가
{
  let li = ["a", "b", "c", "d", "e"];
  li.push("f");
  console.log(`push(arg1) 뒤에 추가 = ${li}`);
}

{
  let li = ["a", "b", "c", "d", "e"];
  li = li.concat(["f", "g"]);
  console.log(`concat(arg1) 복수 추가 = ${li}`);
}

{
  let li = ["a", "b", "c", "d", "e"];
  li.unshift("z");
  console.log(`unshitf(arg1) 첫번째 추가 = ${li}`);
}

{
  let li = ["a", "b", "c", "d", "e"];
  li.splice(2, 0, "B");
  console.log(
    `splice(arg1 특정위치, arg2 제거하려는 위치, arg3 추가하려는 값) = ${li}`
  );
}

// 제거

{
  let li = ["a", "b", "c", "d", "e"];
  li.shift();
  console.log(`shitf 첫번째 제거 = ${li}`);
}

{
  let li = ["a", "b", "c", "d", "e"];
  li.pop();
  console.log(`pop 마지막 제거 = ${li}`);
}

// 정렬

{
  let li = ["c", "e", "a", "b", "d"];
  li.sort();
  console.log(`sort 순서대로 정렬 = ${li}`);
}

{
  let li = ["c", "e", "a", "b", "d"];
  li.reverse();
  console.log(`reverse 순서 반대로 정렬 = ${li}`);
}
