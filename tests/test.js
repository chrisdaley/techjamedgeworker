test('terminates on cookie', () => {
    var result = onClientRequest({headers: {
        "Cookie": "cart=true",
    }});

    // should not terminate and redirect
    assertEq(result.terminates, false);
})

test('no_op on missing cookie', () => {
    var result = onClientRequest();

    // should terminate and redirect
    assertEq(result.terminates, true);
})


test('example_test_failure', () => {
    assertEq(true, false)
})
