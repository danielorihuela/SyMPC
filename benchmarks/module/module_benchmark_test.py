"""Neural networks benchmarks."""
# stdlib
from typing import Any
from typing import Callable
from typing import List

# third party
from conv_model import run_conv_model


def test_run_conv_model(benchmark, get_clients: Callable[[int], List[Any]]):
    """Benchmark simple convolutional network."""
    benchmark(run_conv_model, get_clients)
