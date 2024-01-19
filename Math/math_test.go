package math

import "testing"

func TestAdd(t *testing.T) {
	got := Add(9, 8)
	expect := 17
	if got != expect {
		t.Errorf("got %q, wanted %q", got, expect)
	}
}
