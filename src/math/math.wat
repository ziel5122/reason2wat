(module
  (func $add (param $x i32) (param $y i32) (result i32)
    (i32.add
      (get_local $x)
      (get_local $y)
    )
  )
  (export "add" (func $add))

  (func $divide (param $x i32) (param $y i32) (result i32)
    (i32.div_s
      (get_local $x)
      (get_local $y)
    )
  )
  (export "divide" (func $divide))

  (func $multiply (param $x i32) (param $y i32) (result i32)
    (i32.mul
      (get_local $x)
      (get_local $y)
    )
  )
  (export "multiply" (func $multiply))

  (func $subtract (param $x i32) (param $y i32) (result i32)
    (i32.sub
      (get_local $x)
      (get_local $y)
    )
  )
  (export "subtract" (func $subtract))
)